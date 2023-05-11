import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  return fileName.replace('.ts', '');
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
