

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export let commonapi=createApi({
//     reducerPath:"commonapi",
//     // baseQuery:fetchBaseQuery({baseUrl:"localhost:8000/api"}),
//     baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api" }),

// tagTypes:["messages"],
// endpoints:(builder)=>({
// sendmessages:builder.mutation({
//   query:({name,email,message,number})=>({
//     method:"post",
//     url:"/sendmessages",
//     body:{name,email,message,number}
//   }),  
//   invalidatesTags:["messages"]
// }),
// registeruser:builder.mutation({
//   query:({name,email,password})=>({
//     method:"post",
//     url:"/register",
//     body:({name,email,password})
//   }),
//   invalidatesTags:["/messages"]
// }),

// loginuser:builder.mutation({
//   query:({email,password})=>({
//     method:"post",
//     url:"/login",
// body:({email, password})

//   }),
//   invalidatesTags:["messages"]
// })


// })
// })
// export const {useSendmessagesMutation, useRegisteruserMutation, useLoginuserMutation}=commonapi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include", // Ensures cookies are sent with requests
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("Token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const commonapi = createApi({
  reducerPath: "commonapi",
  baseQuery,
  tagTypes: ["Messages", "User"], // Defined tag types properly
  endpoints: (builder) => ({
    
    // Send Messages
    sendMessages: builder.mutation({
      query: ({ name, email, message, number }) => ({
        method: "POST",
        url: "/sendmessages",
        body: { name, email, message, number },
      }),
      invalidatesTags: ["Messages"],
    }),

    // User Registration
    registerUser: builder.mutation({
      query: ({ name, email, password }) => ({
        method: "POST",
        url: "/register",
        body: { name, email, password },
      }),
      invalidatesTags: ["User"],
    }),

    // User Login
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        method: "POST",
        url: "/login",
        body: { email, password },
      }),
      invalidatesTags: ["User"],
    }),

    // User Logout
    logoutUser: builder.mutation({
      query: () => ({
        method: "POST",
        url: "/logout",
      }),
      invalidatesTags: ["User"],
    }),

  }),
});

export const { 
  useSendMessagesMutation, 
  useRegisterUserMutation, 
  useLoginUserMutation,
  useLogoutUserMutation 
} = commonapi;
