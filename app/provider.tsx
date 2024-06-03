"use client"

import { NextUIProvider } from "@nextui-org/react"
import { I18nProvider } from "@react-aria/i18n"

function Providers({ children }: React.PropsWithChildren) {
  return (
    <NextUIProvider>
      <I18nProvider locale="fa-IR-u-ca-persian">{children}</I18nProvider>
    </NextUIProvider>
  )
}

export default Providers
