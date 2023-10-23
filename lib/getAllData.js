import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'jsons');

export const getAllData = () => {
  const fileNames = fs.readdirSync(dir);
  const allData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.json$/, '');

    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = JSON.parse(fileContents);
    return {
      id,
      data,
    };
  });
  return allData;
};
