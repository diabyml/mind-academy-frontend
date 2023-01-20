import { withApollo as NextApolloWithApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { PaginatedComments, PaginatedCourses, PaginatedPosts } from "../generated/graphql";

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    // uri: process.env.NEXT_PUBLIC_API_URL as string,
    uri: "http://localhost:4000/graphql",
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields:{
            postComments: {
              keyArgs:[],
              merge(existing: PaginatedComments | undefined,incoming: PaginatedComments): PaginatedComments{
                return {
                  ...incoming,
                  data: [...(existing?.data || []),...incoming.data]
                }
              }
  
            },
            posts:{
              keyArgs:[],
              merge(existing: PaginatedPosts | undefined,incoming: PaginatedPosts): PaginatedPosts{
                return {
                  ...incoming,
                  data: [...(existing?.data || []),...incoming.data]
                }
              }
            },

            courses: {
              keyArgs:[],
              merge(existing:PaginatedCourses | undefined, incoming:PaginatedCourses): PaginatedCourses {
                return {
                  ...incoming,
                  data: [...(existing?.data || []),...incoming.data]
                }
              }
            }
          }
        }
      }
    }),
  });

export const withApollo = NextApolloWithApollo(createClient);
