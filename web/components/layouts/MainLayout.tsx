import React, { FC } from "react"
import Head from "next/head"
import ErrorBoundary from "../ErrorBoundary"

type MainLayoutProps = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>SPN DAO</title>
        <meta name="description" content="SPN DAO - Protect your data and profit!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  )
}

export default MainLayout
