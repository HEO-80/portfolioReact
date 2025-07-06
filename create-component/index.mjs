#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Soporte para __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Obtenemos el nombre del componente
const name = process.argv[2];

if (!name) {
  console.error('❌ Tienes que indicar el nombre del componente.');
  process.exit(1);
}

// Ruta del componente
const projectRoot = path.resolve(__dirname, '../'); // vuelve a la raíz del proyecto
const componentDir = path.resolve(projectRoot, `src/components/${name}`);
const filePath = `${componentDir}/${name}.tsx`;

if (fs.existsSync(componentDir)) {
  console.error('❌ El componente ya existe.');
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

// Contenido del componente
const content = `import React from 'react';

interface ${name}Props {
  title: string;
}

const ${name}: React.FC<${name}Props> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default ${name};
`;

fs.writeFileSync(filePath, content);
console.log(`✅ Componente ${name} creado en src/components/${name}/${name}.tsx`);

// Puedes ejecutar este script con: npm run component MiNuevoComponente
// Asegúrate de tener el script en package.json:
// npm create component NombreDelComponente -- este no funciona
//npx create-component NombreDelComponente
//create-component MiComponente

