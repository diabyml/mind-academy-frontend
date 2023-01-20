import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** New category data */
export type AddCategoryInput = {
  content?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type CategoriesResponse = {
  __typename?: 'CategoriesResponse';
  data?: Maybe<Array<Category>>;
  errors?: Maybe<Array<FieldError>>;
};

/** The category to which a post belong */
export type Category = {
  __typename?: 'Category';
  content?: Maybe<Scalars['String']>;
  courses: Array<Course>;
  id: Scalars['ID'];
  /** Not recommend to get this when getting all categories */
  posts: Array<Post>;
  postsCount: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type CategoryInput = {
  id: Scalars['Int'];
};

export type CategoryResponse = {
  __typename?: 'CategoryResponse';
  data?: Maybe<Category>;
  errors?: Maybe<Array<FieldError>>;
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  postId: Scalars['Int'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type ContactUs = {
  __typename?: 'ContactUs';
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  isRead: Scalars['Boolean'];
  message: Scalars['String'];
  region: Scalars['String'];
};

export type Course = {
  __typename?: 'Course';
  commentsCount: Scalars['Int'];
  createdAt: Scalars['String'];
  dislikes: Scalars['Int'];
  html: Scalars['String'];
  id: Scalars['ID'];
  likes: Scalars['Int'];
  published?: Maybe<Scalars['Int']>;
  publishedAt: Scalars['String'];
  slug: Scalars['String'];
  summary: Scalars['String'];
  textSnippet: Scalars['String'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
  videoLink: Scalars['String'];
};

export type CoursesInput = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type CreateCourseInput = {
  html: Scalars['String'];
  slug: Scalars['String'];
  summary: Scalars['String'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  videoLink: Scalars['String'];
};

export type CreatePostInput = {
  content: Scalars['String'];
  html: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: CategoryResponse;
  addNewContactUsMessage: ContactUs;
  createComment?: Maybe<Comment>;
  createCourse: Course;
  createPost: Post;
  deleteCourse: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  react: Scalars['Boolean'];
  readContactUsMessage: Scalars['Boolean'];
  register: UserResponse;
  updateCourse?: Maybe<Course>;
  updatePost?: Maybe<Post>;
};


export type MutationAddCategoryArgs = {
  data: AddCategoryInput;
};


export type MutationAddNewContactUsMessageArgs = {
  data: NewContactUsMessage;
};


export type MutationCreateCommentArgs = {
  data: NewCommentInput;
};


export type MutationCreateCourseArgs = {
  data: CreateCourseInput;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationDeleteCourseArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationReactArgs = {
  data: ReactionInput;
};


export type MutationReadContactUsMessageArgs = {
  id: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationUpdateCourseArgs = {
  data: UpdateCourseInput;
};


export type MutationUpdatePostArgs = {
  data: UpdatePostInput;
};

export type NewCommentInput = {
  content?: InputMaybe<Scalars['String']>;
  postId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type NewContactUsMessage = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  message: Scalars['String'];
  region: Scalars['String'];
};

export type PaginatedCategoryPostsInput = {
  categoryId: Scalars['Int'];
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type PaginatedComments = {
  __typename?: 'PaginatedComments';
  data?: Maybe<Array<Comment>>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedCourses = {
  __typename?: 'PaginatedCourses';
  data: Array<Course>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  data: Array<Post>;
  hasMore: Scalars['Boolean'];
};

export type Post = {
  __typename?: 'Post';
  commentsCount: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  dislikes: Scalars['Int'];
  html: Scalars['String'];
  id: Scalars['ID'];
  likes: Scalars['Int'];
  published?: Maybe<Scalars['Int']>;
  publishedAt: Scalars['String'];
  slug: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type PostCommentsInput = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  postId: Scalars['Int'];
};

export type PostsInput = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category: Category;
  /** Paginating over a particular category posts */
  categoryPosts: PaginatedPosts;
  contactUsMessages: Array<ContactUs>;
  course?: Maybe<Course>;
  courses: PaginatedCourses;
  hello: Scalars['String'];
  me?: Maybe<User>;
  post?: Maybe<Post>;
  postComments: PaginatedComments;
  postCommentsWithoutPagination: Array<Comment>;
  posts: PaginatedPosts;
};


export type QueryCategoryArgs = {
  data: CategoryInput;
};


export type QueryCategoryPostsArgs = {
  data: PaginatedCategoryPostsInput;
};


export type QueryContactUsMessagesArgs = {
  option: Scalars['String'];
};


export type QueryCourseArgs = {
  slug: Scalars['String'];
};


export type QueryCoursesArgs = {
  data: CoursesInput;
};


export type QueryPostArgs = {
  slug: Scalars['String'];
};


export type QueryPostCommentsArgs = {
  data: PostCommentsInput;
};


export type QueryPostCommentsWithoutPaginationArgs = {
  postId: Scalars['String'];
};


export type QueryPostsArgs = {
  data: PostsInput;
};

export type ReactionInput = {
  postId: Scalars['Int'];
  userId: Scalars['Int'];
  value: Scalars['Int'];
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type UpdateCourseInput = {
  html?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  videoLink?: InputMaybe<Scalars['String']>;
};

export type UpdatePostInput = {
  content?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  lastLogin: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  data?: Maybe<User>;
  errors?: Maybe<Array<FieldError>>;
};

export type RegularCommentFragment = { __typename?: 'Comment', id: string, content?: string | null, createdAt: string, user: { __typename?: 'User', id: string, username: string } };

export type ContactUsMessageFragment = { __typename?: 'ContactUs', id: string, fullName: string, email: string, region: string, message: string, isRead: boolean };

export type CourseSnippetFragment = { __typename?: 'Course', id: string, slug: string, title: string, textSnippet: string, thumbnail: string, createdAt: string, html: string, videoLink: string, user: { __typename?: 'User', id: string, username: string } };

export type PostSnippetFragment = { __typename?: 'Post', id: string, slug: string, title: string, likes: number, commentsCount: number, content?: string | null, html: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id: string, username: string } };

export type RegularUserFragment = { __typename?: 'User', id: string, username: string };

export type AddNewContactUsMessageMutationVariables = Exact<{
  fullName: Scalars['String'];
  email: Scalars['String'];
  region: Scalars['String'];
  message: Scalars['String'];
}>;


export type AddNewContactUsMessageMutation = { __typename?: 'Mutation', addNewContactUsMessage: { __typename?: 'ContactUs', id: string, fullName: string, email: string, region: string, message: string, isRead: boolean } };

export type CreateCourseMutationVariables = Exact<{
  title: Scalars['String'];
  summary: Scalars['String'];
  slug: Scalars['String'];
  html: Scalars['String'];
  thumbnail: Scalars['String'];
  videoLink: Scalars['String'];
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'Course', id: string, slug: string, title: string, textSnippet: string, thumbnail: string, createdAt: string, html: string, videoLink: string, user: { __typename?: 'User', id: string, username: string } } };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  slug: Scalars['String'];
  content: Scalars['String'];
  html: Scalars['String'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, slug: string, title: string, likes: number, commentsCount: number, content?: string | null, html: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id: string, username: string } } };

export type DeleteCourseMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCourseMutation = { __typename?: 'Mutation', deleteCourse: boolean };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, data?: { __typename?: 'User', id: string, username: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, data?: { __typename?: 'User', id: string, username: string } | null } };

export type SendCommentMutationVariables = Exact<{
  content?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
  postId: Scalars['Int'];
}>;


export type SendCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', id: string, content?: string | null, createdAt: string, user: { __typename?: 'User', id: string, username: string } } | null };

export type UpdateCourseMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  html?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  videoLink?: InputMaybe<Scalars['String']>;
}>;


export type UpdateCourseMutation = { __typename?: 'Mutation', updateCourse?: { __typename?: 'Course', id: string, slug: string, title: string, textSnippet: string, thumbnail: string, createdAt: string, html: string, videoLink: string, user: { __typename?: 'User', id: string, username: string } } | null };

export type UpdatePostMutationVariables = Exact<{
  slug: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'Post', id: string, slug: string, title: string, likes: number, commentsCount: number, content?: string | null, html: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id: string, username: string } } | null };

export type ContactUsMessagesQueryVariables = Exact<{
  option: Scalars['String'];
}>;


export type ContactUsMessagesQuery = { __typename?: 'Query', contactUsMessages: Array<{ __typename?: 'ContactUs', id: string, fullName: string, email: string, region: string, message: string, isRead: boolean }> };

export type CourseQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CourseQuery = { __typename?: 'Query', course?: { __typename?: 'Course', id: string, slug: string, title: string, textSnippet: string, thumbnail: string, createdAt: string, html: string, videoLink: string, user: { __typename?: 'User', id: string, username: string } } | null };

export type GetCoursesQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetCoursesQuery = { __typename?: 'Query', courses: { __typename?: 'PaginatedCourses', hasMore: boolean, data: Array<{ __typename?: 'Course', id: string, slug: string, title: string, textSnippet: string, thumbnail: string, createdAt: string, html: string, videoLink: string, user: { __typename?: 'User', id: string, username: string } }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string } | null };

export type PostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, slug: string, title: string, likes: number, commentsCount: number, content?: string | null, html: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id: string, username: string } } | null };

export type PostCommentsQueryVariables = Exact<{
  postId: Scalars['Int'];
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type PostCommentsQuery = { __typename?: 'Query', postComments: { __typename?: 'PaginatedComments', hasMore: boolean, data?: Array<{ __typename?: 'Comment', id: string, content?: string | null, createdAt: string, user: { __typename?: 'User', id: string, username: string } }> | null } };

export type PostCommentsWithoutPaginationQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type PostCommentsWithoutPaginationQuery = { __typename?: 'Query', postCommentsWithoutPagination: Array<{ __typename?: 'Comment', id: string, content?: string | null, createdAt: string, user: { __typename?: 'User', id: string, username: string } }> };

export type PostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'PaginatedPosts', hasMore: boolean, data: Array<{ __typename?: 'Post', id: string, slug: string, title: string, likes: number, commentsCount: number, content?: string | null, html: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id: string, username: string } }> } };

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularCommentFragmentDoc = gql`
    fragment RegularComment on Comment {
  id
  content
  createdAt
  user {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export const ContactUsMessageFragmentDoc = gql`
    fragment ContactUsMessage on ContactUs {
  id
  fullName
  email
  region
  message
  isRead
}
    `;
export const CourseSnippetFragmentDoc = gql`
    fragment CourseSnippet on Course {
  id
  slug
  title
  textSnippet
  thumbnail
  createdAt
  html
  videoLink
  user {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export const PostSnippetFragmentDoc = gql`
    fragment PostSnippet on Post {
  id
  slug
  title
  likes
  commentsCount
  content
  html
  createdAt
  updatedAt
  user {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export const AddNewContactUsMessageDocument = gql`
    mutation AddNewContactUsMessage($fullName: String!, $email: String!, $region: String!, $message: String!) {
  addNewContactUsMessage(
    data: {fullName: $fullName, email: $email, region: $region, message: $message}
  ) {
    id
    fullName
    email
    region
    message
    isRead
  }
}
    `;
export type AddNewContactUsMessageMutationFn = Apollo.MutationFunction<AddNewContactUsMessageMutation, AddNewContactUsMessageMutationVariables>;

/**
 * __useAddNewContactUsMessageMutation__
 *
 * To run a mutation, you first call `useAddNewContactUsMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewContactUsMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewContactUsMessageMutation, { data, loading, error }] = useAddNewContactUsMessageMutation({
 *   variables: {
 *      fullName: // value for 'fullName'
 *      email: // value for 'email'
 *      region: // value for 'region'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useAddNewContactUsMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddNewContactUsMessageMutation, AddNewContactUsMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNewContactUsMessageMutation, AddNewContactUsMessageMutationVariables>(AddNewContactUsMessageDocument, options);
      }
export type AddNewContactUsMessageMutationHookResult = ReturnType<typeof useAddNewContactUsMessageMutation>;
export type AddNewContactUsMessageMutationResult = Apollo.MutationResult<AddNewContactUsMessageMutation>;
export type AddNewContactUsMessageMutationOptions = Apollo.BaseMutationOptions<AddNewContactUsMessageMutation, AddNewContactUsMessageMutationVariables>;
export const CreateCourseDocument = gql`
    mutation CreateCourse($title: String!, $summary: String!, $slug: String!, $html: String!, $thumbnail: String!, $videoLink: String!) {
  createCourse(
    data: {title: $title, summary: $summary, slug: $slug, html: $html, thumbnail: $thumbnail, videoLink: $videoLink}
  ) {
    ...CourseSnippet
  }
}
    ${CourseSnippetFragmentDoc}`;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      title: // value for 'title'
 *      summary: // value for 'summary'
 *      slug: // value for 'slug'
 *      html: // value for 'html'
 *      thumbnail: // value for 'thumbnail'
 *      videoLink: // value for 'videoLink'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($title: String!, $slug: String!, $content: String!, $html: String!) {
  createPost(data: {title: $title, slug: $slug, content: $content, html: $html}) {
    ...PostSnippet
    user {
      ...RegularUser
    }
  }
}
    ${PostSnippetFragmentDoc}
${RegularUserFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      slug: // value for 'slug'
 *      content: // value for 'content'
 *      html: // value for 'html'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeleteCourseDocument = gql`
    mutation DeleteCourse($id: Int!) {
  deleteCourse(id: $id)
}
    `;
export type DeleteCourseMutationFn = Apollo.MutationFunction<DeleteCourseMutation, DeleteCourseMutationVariables>;

/**
 * __useDeleteCourseMutation__
 *
 * To run a mutation, you first call `useDeleteCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCourseMutation, { data, loading, error }] = useDeleteCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCourseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCourseMutation, DeleteCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCourseMutation, DeleteCourseMutationVariables>(DeleteCourseDocument, options);
      }
export type DeleteCourseMutationHookResult = ReturnType<typeof useDeleteCourseMutation>;
export type DeleteCourseMutationResult = Apollo.MutationResult<DeleteCourseMutation>;
export type DeleteCourseMutationOptions = Apollo.BaseMutationOptions<DeleteCourseMutation, DeleteCourseMutationVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($id: Int!) {
  deletePost(id: $id)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(data: {usernameOrEmail: $usernameOrEmail, password: $password}) {
    errors {
      field
      message
    }
    data {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!, $firstName: String, $lastName: String, $mobile: String) {
  register(
    data: {username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, mobile: $mobile}
  ) {
    errors {
      field
      message
    }
    data {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      mobile: // value for 'mobile'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SendCommentDocument = gql`
    mutation SendComment($content: String, $userId: Int!, $postId: Int!) {
  createComment(data: {content: $content, userId: $userId, postId: $postId}) {
    id
    content
    createdAt
    user {
      id
      username
    }
  }
}
    `;
export type SendCommentMutationFn = Apollo.MutationFunction<SendCommentMutation, SendCommentMutationVariables>;

/**
 * __useSendCommentMutation__
 *
 * To run a mutation, you first call `useSendCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCommentMutation, { data, loading, error }] = useSendCommentMutation({
 *   variables: {
 *      content: // value for 'content'
 *      userId: // value for 'userId'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useSendCommentMutation(baseOptions?: Apollo.MutationHookOptions<SendCommentMutation, SendCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendCommentMutation, SendCommentMutationVariables>(SendCommentDocument, options);
      }
export type SendCommentMutationHookResult = ReturnType<typeof useSendCommentMutation>;
export type SendCommentMutationResult = Apollo.MutationResult<SendCommentMutation>;
export type SendCommentMutationOptions = Apollo.BaseMutationOptions<SendCommentMutation, SendCommentMutationVariables>;
export const UpdateCourseDocument = gql`
    mutation UpdateCourse($title: String, $summary: String, $slug: String!, $html: String, $thumbnail: String, $videoLink: String) {
  updateCourse(
    data: {slug: $slug, title: $title, summary: $summary, html: $html, thumbnail: $thumbnail, videoLink: $videoLink}
  ) {
    ...CourseSnippet
  }
}
    ${CourseSnippetFragmentDoc}`;
export type UpdateCourseMutationFn = Apollo.MutationFunction<UpdateCourseMutation, UpdateCourseMutationVariables>;

/**
 * __useUpdateCourseMutation__
 *
 * To run a mutation, you first call `useUpdateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseMutation, { data, loading, error }] = useUpdateCourseMutation({
 *   variables: {
 *      title: // value for 'title'
 *      summary: // value for 'summary'
 *      slug: // value for 'slug'
 *      html: // value for 'html'
 *      thumbnail: // value for 'thumbnail'
 *      videoLink: // value for 'videoLink'
 *   },
 * });
 */
export function useUpdateCourseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCourseMutation, UpdateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCourseMutation, UpdateCourseMutationVariables>(UpdateCourseDocument, options);
      }
export type UpdateCourseMutationHookResult = ReturnType<typeof useUpdateCourseMutation>;
export type UpdateCourseMutationResult = Apollo.MutationResult<UpdateCourseMutation>;
export type UpdateCourseMutationOptions = Apollo.BaseMutationOptions<UpdateCourseMutation, UpdateCourseMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($slug: String!, $title: String, $content: String, $html: String) {
  updatePost(data: {slug: $slug, title: $title, content: $content, html: $html}) {
    ...PostSnippet
  }
}
    ${PostSnippetFragmentDoc}`;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      html: // value for 'html'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const ContactUsMessagesDocument = gql`
    query ContactUsMessages($option: String!) {
  contactUsMessages(option: $option) {
    ...ContactUsMessage
  }
}
    ${ContactUsMessageFragmentDoc}`;

/**
 * __useContactUsMessagesQuery__
 *
 * To run a query within a React component, call `useContactUsMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactUsMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactUsMessagesQuery({
 *   variables: {
 *      option: // value for 'option'
 *   },
 * });
 */
export function useContactUsMessagesQuery(baseOptions: Apollo.QueryHookOptions<ContactUsMessagesQuery, ContactUsMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactUsMessagesQuery, ContactUsMessagesQueryVariables>(ContactUsMessagesDocument, options);
      }
export function useContactUsMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactUsMessagesQuery, ContactUsMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactUsMessagesQuery, ContactUsMessagesQueryVariables>(ContactUsMessagesDocument, options);
        }
export type ContactUsMessagesQueryHookResult = ReturnType<typeof useContactUsMessagesQuery>;
export type ContactUsMessagesLazyQueryHookResult = ReturnType<typeof useContactUsMessagesLazyQuery>;
export type ContactUsMessagesQueryResult = Apollo.QueryResult<ContactUsMessagesQuery, ContactUsMessagesQueryVariables>;
export const CourseDocument = gql`
    query Course($slug: String!) {
  course(slug: $slug) {
    ...CourseSnippet
  }
}
    ${CourseSnippetFragmentDoc}`;

/**
 * __useCourseQuery__
 *
 * To run a query within a React component, call `useCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCourseQuery(baseOptions: Apollo.QueryHookOptions<CourseQuery, CourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
      }
export function useCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseQuery, CourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
        }
export type CourseQueryHookResult = ReturnType<typeof useCourseQuery>;
export type CourseLazyQueryHookResult = ReturnType<typeof useCourseLazyQuery>;
export type CourseQueryResult = Apollo.QueryResult<CourseQuery, CourseQueryVariables>;
export const GetCoursesDocument = gql`
    query GetCourses($cursor: String, $limit: Int) {
  courses(data: {cursor: $cursor, limit: $limit}) {
    hasMore
    data {
      ...CourseSnippet
    }
  }
}
    ${CourseSnippetFragmentDoc}`;

/**
 * __useGetCoursesQuery__
 *
 * To run a query within a React component, call `useGetCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetCoursesQuery(baseOptions?: Apollo.QueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options);
      }
export function useGetCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options);
        }
export type GetCoursesQueryHookResult = ReturnType<typeof useGetCoursesQuery>;
export type GetCoursesLazyQueryHookResult = ReturnType<typeof useGetCoursesLazyQuery>;
export type GetCoursesQueryResult = Apollo.QueryResult<GetCoursesQuery, GetCoursesQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PostDocument = gql`
    query Post($slug: String!) {
  post(slug: $slug) {
    ...PostSnippet
  }
}
    ${PostSnippetFragmentDoc}`;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostCommentsDocument = gql`
    query PostComments($postId: Int!, $cursor: String, $limit: Int) {
  postComments(data: {postId: $postId, cursor: $cursor, limit: $limit}) {
    hasMore
    data {
      ...RegularComment
    }
  }
}
    ${RegularCommentFragmentDoc}`;

/**
 * __usePostCommentsQuery__
 *
 * To run a query within a React component, call `usePostCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostCommentsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePostCommentsQuery(baseOptions: Apollo.QueryHookOptions<PostCommentsQuery, PostCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostCommentsQuery, PostCommentsQueryVariables>(PostCommentsDocument, options);
      }
export function usePostCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostCommentsQuery, PostCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostCommentsQuery, PostCommentsQueryVariables>(PostCommentsDocument, options);
        }
export type PostCommentsQueryHookResult = ReturnType<typeof usePostCommentsQuery>;
export type PostCommentsLazyQueryHookResult = ReturnType<typeof usePostCommentsLazyQuery>;
export type PostCommentsQueryResult = Apollo.QueryResult<PostCommentsQuery, PostCommentsQueryVariables>;
export const PostCommentsWithoutPaginationDocument = gql`
    query PostCommentsWithoutPagination($postId: String!) {
  postCommentsWithoutPagination(postId: $postId) {
    id
    content
    createdAt
    user {
      id
      username
    }
  }
}
    `;

/**
 * __usePostCommentsWithoutPaginationQuery__
 *
 * To run a query within a React component, call `usePostCommentsWithoutPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostCommentsWithoutPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostCommentsWithoutPaginationQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostCommentsWithoutPaginationQuery(baseOptions: Apollo.QueryHookOptions<PostCommentsWithoutPaginationQuery, PostCommentsWithoutPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostCommentsWithoutPaginationQuery, PostCommentsWithoutPaginationQueryVariables>(PostCommentsWithoutPaginationDocument, options);
      }
export function usePostCommentsWithoutPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostCommentsWithoutPaginationQuery, PostCommentsWithoutPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostCommentsWithoutPaginationQuery, PostCommentsWithoutPaginationQueryVariables>(PostCommentsWithoutPaginationDocument, options);
        }
export type PostCommentsWithoutPaginationQueryHookResult = ReturnType<typeof usePostCommentsWithoutPaginationQuery>;
export type PostCommentsWithoutPaginationLazyQueryHookResult = ReturnType<typeof usePostCommentsWithoutPaginationLazyQuery>;
export type PostCommentsWithoutPaginationQueryResult = Apollo.QueryResult<PostCommentsWithoutPaginationQuery, PostCommentsWithoutPaginationQueryVariables>;
export const PostsDocument = gql`
    query Posts($cursor: String, $limit: Int) {
  posts(data: {cursor: $cursor, limit: $limit}) {
    hasMore
    data {
      ...PostSnippet
    }
  }
}
    ${PostSnippetFragmentDoc}`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;