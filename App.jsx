
import { useState } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Table } from "./components/Table";

export default function RotaApp() {
  const [formData, setFormData] = useState({
    sd: "",
    bairro: "",
    motorista: "",
    prefixo: "",
    vaga: "",
    onda: "",
    tipo: ""
  });

  const [registros, setRegistros] = useState([]);
  const [filtro, setFiltro] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const adicionarRegistro = () => {
    setRegistros([...registros, formData]);
    setFormData({ sd: "", bairro: "", motorista: "", prefixo: "", vaga: "", onda: "", tipo: "" });
  };

  const registrosFiltrados = registros
    .filter((r) =>
      Object.values(r).some((val) =>
        val.toLowerCase().includes(filtro.toLowerCase())
      )
    )
    .sort((a, b) => a.vaga.localeCompare(b.vaga));

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Sistema de Rotas</h1>
      <div className="grid grid-cols-2 gap-2">
        <Input name="sd" placeholder="SD" value={formData.sd} onChange={handleChange} />
        <Input name="bairro" placeholder="Bairro" value={formData.bairro} onChange={handleChange} />
        <Input name="motorista" placeholder="Motorista" value={formData.motorista} onChange={handleChange} />
        <Input name="prefixo" placeholder="Prefixo" value={formData.prefixo} onChange={handleChange} />
        <Input name="vaga" placeholder="Vaga" value={formData.vaga} onChange={handleChange} />
        <Input name="onda" placeholder="Onda" value={formData.onda} onChange={handleChange} />
        <Input name="tipo" placeholder="Passeio/Utilitário" value={formData.tipo} onChange={handleChange} />
      </div>
      <Button onClick={adicionarRegistro}>Adicionar</Button>

      <Input
        placeholder="Filtrar por qualquer campo"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <Table data={registrosFiltrados} />
    </div>
  );
}
