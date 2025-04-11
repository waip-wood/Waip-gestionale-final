import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";

const statiAvanzamento = [
  "Primo incontro",
  "Rilievo",
  "Preventivo consegnato",
  "Preventivo approvato",
  "Fattura acconto",
  "Ordini eseguiti",
  "Montaggio",
  "Saldo"
];

const progressoClienti = [];

export default function GestionaleMockup() {
  const [cliente, setCliente] = useState({ nome: "", telefono: "", indirizzo: "" });
  const [errore, setErrore] = useState("");

  const salvaCliente = () => {
    if (!cliente.nome || !cliente.telefono || !cliente.indirizzo) {
      setErrore("Compila nome, telefono e indirizzo prima di salvare");
    } else {
      setErrore("");
      alert("Cliente salvato correttamente");
    }
  };

  return (
    <div className="p-6 grid gap-6">
      {/* Dashboard iniziale */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="col-span-2">
          <CardContent className="pt-4">
            <Label>Calendario</Label>
            <div className="max-w-full overflow-x-auto">
              <Calendar mode="single" selected={new Date()} className="w-full max-w-md" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <Label>Rubrica Clienti</Label>
            <ul className="mt-2 space-y-2">
              <li>—</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <Label>Rubrica Fornitori</Label>
            <ul className="mt-2 space-y-2">
              <li>—</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Tabella Stato Avanzamento Clienti */}
      <Card>
        <CardContent className="pt-4">
          <Label>Stato Avanzamento Clienti e Progetti</Label>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr>
                  <th className="text-left p-2 border">Cliente</th>
                  {statiAvanzamento.map((stato, index) => (
                    <th key={index} className="text-left p-2 border">{stato}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {progressoClienti.map((cliente, i) => (
                  <tr key={i}>
                    <td className="p-2 border font-medium">{cliente.cliente}</td>
                    {cliente.progresso.map((step, j) => (
                      <td
                        key={j}
                        className={`p-2 border text-center ${step.step ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                      >
                        {step.step ? "✓" : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="clienti">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="clienti">Clienti</TabsTrigger>
          <TabsTrigger value="fornitori">Fornitori</TabsTrigger>
          <TabsTrigger value="progetti">Progetti</TabsTrigger>
          <TabsTrigger value="magazzino">Magazzino</TabsTrigger>
        </TabsList>

        {/* CLIENTI */}
        <TabsContent value="clienti">
          <Card>
            <CardContent className="grid gap-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nome e Cognome" onChange={e => setCliente({ ...cliente, nome: e.target.value })} />
                <Input placeholder="Codice Fiscale" />
                <Input placeholder="Telefono" onChange={e => setCliente({ ...cliente, telefono: e.target.value })} />
                <Input placeholder="Email" />
                <Input placeholder="Indirizzo" onChange={e => setCliente({ ...cliente, indirizzo: e.target.value })} />
                <Input placeholder="Intestatario Fattura" />
              </div>
              <Textarea placeholder="Note varie ed eventuali" />
              <div className="grid grid-cols-2 gap-4">
                <Label>Appuntamenti</Label>
                <Calendar mode="single" selected={new Date()} />
              </div>
              {errore && <p className="text-red-500 font-medium">{errore}</p>}
              <Button onClick={salvaCliente}>Salva Cliente</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FORNITORI */}
        <TabsContent value="fornitori">
          <Card>
            <CardContent className="grid gap-4 pt-4">
              <Input placeholder="Nome Fornitore" />
              <Input placeholder="Contatti" />
              <Textarea placeholder="Note" />
              <Button>Salva Fornitore</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PROGETTI */}
        <TabsContent value="progetti">
          <Card>
            <CardContent className="grid gap-4 pt-4">
              <Input placeholder="Nome Cliente" />
              <Input placeholder="Nome Progetto" />
              <Textarea placeholder="Note Progetto / Preventivo" />
              <Input placeholder="Operatore incaricato" />

              <Label className="pt-2">📎 Carica Preventivo</Label>
              <Input type="file" accept=".pdf,.doc,.docx" />

              <Label className="pt-2">💰 Carica Costi</Label>
              <Input type="file" accept=".pdf,.xlsx" />

              <Label className="pt-2">📐 Carica Rilievi</Label>
              <Input type="file" accept=".jpg,.png,.pdf" multiple />

              <Label className="pt-2">📄 Carica Disegni di Progetto</Label>
              <Input type="file" accept=".pdf,.dwg,.jpg,.png" multiple />

              <select className="border p-2 rounded">
                <option>Stato avanzamento</option>
                {statiAvanzamento.map((stato, idx) => (
                  <option key={idx}>{stato}</option>
                ))}
                <option>Concluso</option>
                <option>Perso</option>
              </select>
              <Button>Salva Progetto</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* MAGAZZINO */}
        <TabsContent value="magazzino">
          <Card>
            <CardContent className="grid gap-4 pt-4">
              <Input placeholder="Articolo" />
              <Input placeholder="Data Consegna" />
              <Input placeholder="Numero Colli" />
              <Input placeholder="Posizione in Magazzino" />
              <Textarea placeholder="Controllo materiale (tutto ok?)" />
              <Button>Salva Magazzino</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
