import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router/Router'
import {RouterProvider} from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const client=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={client} >
   <RouterProvider router={Router}/>
   </QueryClientProvider>
  </React.StrictMode>,
)
