const { PrismaClient } = require("@prisma/client");
const { mockDeep } = require("jest-mock-extended");

const prisma = mockDeep(PrismaClient);

module.exports = prisma;
