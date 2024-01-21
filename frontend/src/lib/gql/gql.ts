/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tmutation FavoritePokemon($id: ID!) {\n\t\tfavoritePokemon(id: $id) {\n\t\t\tid\n\t\t\tisFavorite\n\t\t}\n\t}\n": types.FavoritePokemonDocument,
    "\n\tmutation UnFavoritePokemon($id: ID!) {\n\t\tunFavoritePokemon(id: $id) {\n\t\t\tid\n\t\t\tisFavorite\n\t\t}\n\t}\n": types.UnFavoritePokemonDocument,
    "\n\tquery Pokemons($limit: Int, $offset: Int, $search: String, $filter: PokemonFilterInput) {\n\t\tpokemons(query: { limit: $limit, offset: $offset, search: $search, filter: $filter }) {\n\t\t\tcount\n\t\t\tedges {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t\tname\n\t\t\t\ttypes\n\t\t\t\tisFavorite\n\t\t\t}\n\t\t}\n\t}\n": types.PokemonsDocument,
    "\n\tquery PokemonTypes {\n\t\tpokemonTypes\n\t}\n": types.PokemonTypesDocument,
    "\n\tquery PokemonByName($name: String!) {\n\t\tpokemonByName(name: $name) {\n\t\t\tid\n\t\t\tname\n\t\t\tweight {\n\t\t\t\tminimum\n\t\t\t\tmaximum\n\t\t\t}\n\t\t\theight {\n\t\t\t\tminimum\n\t\t\t\tmaximum\n\t\t\t}\n\t\t\ttypes\n\t\t\tmaxCP\n\t\t\tevolutions {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t\tname\n\t\t\t\tisFavorite\n\t\t\t}\n\t\t\tmaxHP\n\t\t\timage\n\t\t\tsound\n\t\t\tisFavorite\n\t\t}\n\t}\n": types.PokemonByNameDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation FavoritePokemon($id: ID!) {\n\t\tfavoritePokemon(id: $id) {\n\t\t\tid\n\t\t\tisFavorite\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation FavoritePokemon($id: ID!) {\n\t\tfavoritePokemon(id: $id) {\n\t\t\tid\n\t\t\tisFavorite\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation UnFavoritePokemon($id: ID!) {\n\t\tunFavoritePokemon(id: $id) {\n\t\t\tid\n\t\t\tisFavorite\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation UnFavoritePokemon($id: ID!) {\n\t\tunFavoritePokemon(id: $id) {\n\t\t\tid\n\t\t\tisFavorite\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery Pokemons($limit: Int, $offset: Int, $search: String, $filter: PokemonFilterInput) {\n\t\tpokemons(query: { limit: $limit, offset: $offset, search: $search, filter: $filter }) {\n\t\t\tcount\n\t\t\tedges {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t\tname\n\t\t\t\ttypes\n\t\t\t\tisFavorite\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Pokemons($limit: Int, $offset: Int, $search: String, $filter: PokemonFilterInput) {\n\t\tpokemons(query: { limit: $limit, offset: $offset, search: $search, filter: $filter }) {\n\t\t\tcount\n\t\t\tedges {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t\tname\n\t\t\t\ttypes\n\t\t\t\tisFavorite\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery PokemonTypes {\n\t\tpokemonTypes\n\t}\n"): (typeof documents)["\n\tquery PokemonTypes {\n\t\tpokemonTypes\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery PokemonByName($name: String!) {\n\t\tpokemonByName(name: $name) {\n\t\t\tid\n\t\t\tname\n\t\t\tweight {\n\t\t\t\tminimum\n\t\t\t\tmaximum\n\t\t\t}\n\t\t\theight {\n\t\t\t\tminimum\n\t\t\t\tmaximum\n\t\t\t}\n\t\t\ttypes\n\t\t\tmaxCP\n\t\t\tevolutions {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t\tname\n\t\t\t\tisFavorite\n\t\t\t}\n\t\t\tmaxHP\n\t\t\timage\n\t\t\tsound\n\t\t\tisFavorite\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery PokemonByName($name: String!) {\n\t\tpokemonByName(name: $name) {\n\t\t\tid\n\t\t\tname\n\t\t\tweight {\n\t\t\t\tminimum\n\t\t\t\tmaximum\n\t\t\t}\n\t\t\theight {\n\t\t\t\tminimum\n\t\t\t\tmaximum\n\t\t\t}\n\t\t\ttypes\n\t\t\tmaxCP\n\t\t\tevolutions {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t\tname\n\t\t\t\tisFavorite\n\t\t\t}\n\t\t\tmaxHP\n\t\t\timage\n\t\t\tsound\n\t\t\tisFavorite\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;