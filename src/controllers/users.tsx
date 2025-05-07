import express from 'express';
import { prisma } from '../conn/conn';
import bcrypt from 'bcrypt';

export async function postUser(req :express.Request, res:express.Response, next:express.NextFunction) {
    const { name, email, password } = req.body;
  if (!name || !email || !password) {
     res.status(400).json({ message: 'All fields are required' });
     return;
  }
  if (password.length < 6) {
     res.status(400).json({ message: 'Password must be at least 6 characters long' });
     return;
  }
  
  const userExists = await prisma.user.findUnique({
    where: { email },
  })
if (userExists){
     res.status(400).json({ message: 'User already exists' });
     return;
  }

  const hashepassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashepassword,
    },
  })
    if (!user) {
         res.status(500).json({ message: 'Error creating user' });
         return;
    }
     res.status(201).json({ message: 'User created successfully', user });
     return;
}
