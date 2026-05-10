import bcrypt from 'bcrypt';
import { UserRole } from '@prisma/client';
import { prisma } from '../src/config/database.js';

async function main() {
  const email = process.env.ADMIN_SEED_EMAIL;
  const password = process.env.ADMIN_SEED_PASSWORD;

  if (!email || !password) {
    console.log('[seed] ADMIN_SEED_EMAIL / ADMIN_SEED_PASSWORD не заданы — пропуск.');
    return;
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log('[seed] Администратор уже существует:', email);
    return;
  }

  const rounds = Number(process.env.BCRYPT_ROUNDS ?? 12);
  const passwordHash = await bcrypt.hash(password, rounds);

  await prisma.user.create({
    data: {
      email,
      passwordHash,
      role: UserRole.ADMIN,
    },
  });

  console.log('[seed] Создан администратор:', email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
