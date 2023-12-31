import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/api/login",
          method: "post",
          body,
        };
      },
    }),
    signupUser: builder.mutation({
      query: (body: { firstName: string; lastName: string; date_of_birth: string;  phone: string; email: string; password: string; role: string }) => {
        return {
          url: "/api/sign-up",
          method: "post",
          body,
        };
      },
    }),
    // sendMailForVerification: builder.mutation({
    //   query: (body: { email: string }) => {
    //     return {
    //       url: "/user/send-verification-mail",
    //       method: "post",
    //       body,
    //     };
    //   },
    // }),
    // verifyUser: builder.mutation({
    //   query: (body: { token: string }) => {
    //     console.log(body.token);

    //     return {
    //       url: "/user/verfiy-user-mail",
    //       method: "post",
    //       body,
    //     };
    //   },
    // }),
    // sendMailForgotPassword: builder.mutation({
    //   query: (body: { email: string }) => {
    //     return {
    //       url: "/user/forgot-password",
    //       method: "post",
    //       body,
    //     };
    //   },
    // }),
    // resetPassword: builder.mutation({
    //   query: (body: { token: string; password: string }) => {
    //     return {
    //       url: "/user/verify-forgot-mail",
    //       method: "post",
    //       body,
    //     };
    //   },
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useSigninUserMutation,
  useSignupUserMutation,
//   useSendMailForVerificationMutation,
//   useVerifyUserMutation,
//   useSendMailForgotPasswordMutation,
//   useResetPasswordMutation,
} = authApi;