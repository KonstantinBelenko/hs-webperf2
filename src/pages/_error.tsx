import * as Sentry from '@sentry/nextjs'
import NextErrorComponent from 'next/error'

const MyError = ({ statusCode, hasGetInitialPropsRun, err }: any) => {
  if (!hasGetInitialPropsRun && err) {
    // Ensure that Sentry logs server-side errors
    Sentry.captureException(err)
  }

  return <NextErrorComponent statusCode={statusCode} />
}

MyError.getInitialProps = async (context: any) => {
  const errorInitialProps = (await NextErrorComponent.getInitialProps(
    context
  )) as any

  const { res, err, asPath } = context

  errorInitialProps.hasGetInitialPropsRun = true

  if (res?.statusCode === 404) {
    // Optionally capture 404 errors
    return { statusCode: 404 }
  }

  if (err) {
    Sentry.captureException(err)
    await Sentry.flush(2000)

    return errorInitialProps
  }

  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  )
  await Sentry.flush(2000)

  return errorInitialProps
}

export default MyError
