
export function Table({ data }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>SD</th><th>Bairro</th><th>Motorista</th><th>Prefixo</th><th>Vaga</th><th>Onda</th><th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r, i) => (
          <tr key={i}>
            <td>{r.sd}</td><td>{r.bairro}</td><td>{r.motorista}</td>
            <td>{r.prefixo}</td><td>{r.vaga}</td><td>{r.onda}</td><td>{r.tipo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
