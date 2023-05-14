import api from '@/config/api';
import { User } from '@/types/user';

export type ForgotPasswordArgs = {
  email: string;
};

export type ForgotPasswordResult = {
  message: string;
};

export type ResetPasswordArgs = {
  key: string;
  token: string;
  password: string;
};

export type CreateUserArgs = Omit<
  User,
  'id' | 'access_token' | 'emailValidated' | 'avatarUrl' | 'createdAt' | 'role' | 'status' | 'preferences'
> & {
  password: string;
  confirmPassword: string;
};

export type ChangePasswordArgs = {
  password: string;
  newPassword: string;
};

export type ValidateArgs = {
  key: string;
  token: string;
};

export type UpdateUser = User;

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.mutation<User, string>({
      query: (id) => `users/${id}`,
    }),

    createUser: builder.mutation<User, CreateUserArgs>({
      query: (data) => ({
        url: 'users',
        method: 'POST',
        body: {
          ...data,
        },
      }),
    }),

    forgotPassword: builder.mutation<ForgotPasswordResult, { email: string }>({
      query: (email) => ({
        url: 'users/forgotPassword',
        method: 'POST',
        body: email,
      }),
    }),

    resetPassword: builder.mutation<null, ResetPasswordArgs>({
      query: (resetPasswordBody) => ({
        url: 'users/resetPassword',
        method: 'POST',
        body: resetPasswordBody,
      }),
    }),

    updateUser: builder.mutation<User, User>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PUT',
        body: user,
      }),
    }),

    changePassword: builder.mutation<ChangePasswordArgs, ChangePasswordArgs>({
      query: ({ newPassword, password }) => ({
        url: `users/changePassword`,
        method: 'PATCH',
        body: {
          password,
          newPassword,
        },
      }),
    }),

    addAvatar: builder.mutation<File, File>({
      query: (file) => {
        const formData = new FormData();

        formData.append('file', file);
        return {
          url: `users/avatar/add`,
          method: 'PATCH',
          body: formData,
        };
      },
    }),

    avatarRemove: builder.mutation<void, void>({
      query: () => {
        return {
          url: `users/avatar/remove`,
          method: 'DELETE',
        };
      },
    }),

    validate: builder.mutation<any, ValidateArgs>({
      query: ({ key, token }) => {
        return {
          url: 'users/setUserEmailValidation',
          method: 'POST',
          body: { key, token },
        };
      },
    }),

    sendValidationEmail: builder.mutation<{ message: string }, { email: string }>({
      query: ({ email }) => {
        return {
          url: 'users/createUserEmailValidation',
          method: 'POST',
          body: { email },
        };
      },
    }),
  }),

  overrideExisting: false,
});

export const {
  useCreateUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useUpdateUserMutation,
  useChangePasswordMutation,
  useAddAvatarMutation,
  useAvatarRemoveMutation,
  useValidateMutation,
  useSendValidationEmailMutation,
  useGetUserByIdMutation,
} = usersApi;
