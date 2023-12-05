// role: z.enum(["ADMIN", "USER"], {
//     invalid_type_error: "please bro",
// }),

//     {/* PASSWORD */}
//     <div>
//     <Input
//         label="Password"
//         name="password"
//         required
//         type="text"
//         id="password"
//     />
//     {error?.password && (
//         <p className="text-sm text-red-500 mt-2">{error.password[0]}</p>
//     )}
// </div>


// {/* ROLE RADIO SELECT */}
// <div className="flex flex-col gap-2">
//     <p className="text-slate-500">Role</p>
//     <section className="flex gap-3">
//         <div className="flex items-center gap-2">
//             <input
//                 id="user"
//                 type="radio"
//                 value="USER"
//                 name="role"
//                 defaultChecked
//                 className="radio radio-info"
//             />

//             <label
//                 htmlFor="user"
//                 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//                 User
//             </label>
//         </div>
//         <div className="flex items-center gap-2">
//             <input
//                 id="admin"
//                 type="radio"
//                 value="ADMIN"
//                 name="role"
//                 className="radio radio-info"
//             />

//             <label
//                 htmlFor="admin"
//                 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//                 Admin
//             </label>
//         </div>
//     </section>
// </div>
// {error?.role && (
//     <p className="text-sm text-red-500 mt-2">{error.role[0]}</p>
// )}