// scripts/create-component.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname equivalente en ESM:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const name = process.argv[2];

if (!name) {
  console.error('❌ Tienes que indicar el nombre del componente.');
  process.exit(1);
}

const componentDir = path.resolve(__dirname, `../src/components/${name}`);
const filePath = `${componentDir}/${name}.tsx`;

if (fs.existsSync(componentDir)) {
  console.error('❌ El componente ya existe.');
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

const content = `import React from 'react';

interface MiNuevoComponenteProps {
  title: string;
}

const MiNuevoComponente: React.FC<MiNuevoComponenteProps> = ({ title }) => {
  return <h2>{title}</h2>;
};

export default MiNuevoComponente;
`;

fs.writeFileSync(filePath, content);
console.log(`✅ Componente ${name} creado en src/components/${name}/${name}.tsx`);

// npm run component MiNuevoComponente