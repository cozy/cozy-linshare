import React from 'react'

import { useExternalBridge } from 'cozy-external-bridge/container'
import flag from 'cozy-flags'

const App = () => {
  const embeddedLinShareUrl = flag('linshare.embedded-app-url')

  useExternalBridge(embeddedLinShareUrl)

  return <iframe id="embeddedApp" src={embeddedLinShareUrl}></iframe>
}

export default App
