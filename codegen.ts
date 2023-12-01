import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://spacex-production.up.railway.app/',
  documents: ['./**/*.ts'],
  emitLegacyCommonJSImports: false,
  generates: {
    './generated/': {
      preset: 'client',
      plugins: ['typescript-react-query']
    }
  }
}
 
export default config