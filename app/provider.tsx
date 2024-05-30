"use client"

import { NextUIProvider } from "@nextui-org/react"
import { I18nProvider } from "@react-aria/i18n"

function Providers({ children }: React.PropsWithChildren) {
  return (
    <I18nProvider locale="fa-IR-u-ca-persian">
      <NextUIProvider>{children}</NextUIProvider>
    </I18nProvider>
  )
}

export default Providers
