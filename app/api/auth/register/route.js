// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import dbConnect from "@/app/lib/db";
// import User from "@/app/lib/models/User";

// export async function POST(request) {
//   try {
//     const { name, email, password } = await request.json();

//     // Validate input
//     if (!name || !email || !password) {
//       return NextResponse.json(
//         { error: "Please provide name, email, and password" },
//         { status: 400 }
//       );
//     }

//     if (name.length < 2) {
//       return NextResponse.json(
//         { error: "Name must be at least 2 characters" },
//         { status: 400 }
//       );
//     }

//     if (password.length < 6) {
//       return NextResponse.json(
//         { error: "Password must be at least 6 characters" },
//         { status: 400 }
//       );
//     }

//     // Connect to database
//     await dbConnect();

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return NextResponse.json(
//         { error: "User with this email already exists" },
//         { status: 400 }
//       );
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     // Return user data (without password)
//     const userData = {
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       isVerified: user.isVerified,
//     };

//     return NextResponse.json(
//       {
//         message: "Registration successful",
//         user: userData,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Registration error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }