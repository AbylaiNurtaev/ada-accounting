import fs from 'node:fs';
import path from 'node:path';
import multer from 'multer';
import { env } from '../config/env.js';

const uploadRoot = path.resolve(process.cwd(), env.UPLOAD_DIR);

if (!fs.existsSync(uploadRoot)) {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadRoot);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname) || '.bin';
    const base = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    cb(null, `${base}${ext}`);
  },
});

const imageMime = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

export const uploadCaseImages = multer({
  storage,
  limits: { fileSize: env.MAX_FILE_SIZE_BYTES, files: 12 },
  fileFilter: (_req, file, cb) => {
    if (!imageMime.has(file.mimetype)) {
      cb(new Error('Only JPEG, PNG, WEBP, GIF images are allowed'));
      return;
    }
    cb(null, true);
  },
});

export function uploadsAbsoluteDir(): string {
  return uploadRoot;
}

export function toPublicUploadPath(filename: string): string {
  const safe = path.basename(filename);
  return `/uploads/${safe}`;
}
