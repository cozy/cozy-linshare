import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent, BarCenter } from 'cozy-bar'
import BarTitle from 'cozy-ui/transpiled/react/BarTitle'
import Icon from 'cozy-ui/transpiled/react/Icon'

import linshare from '../assets/icons/icon.svg'

const AppLayout = () => {
  return (
    <>
      <BarCenter>
        <BarTitle>
          <div className="u-flex u-flex-items-center">
            <Icon icon={linshare} size="32" className="u-mr-half" />
            LinShare
          </div>
        </BarTitle>
      </BarCenter>
      <BarComponent searchOptions={{ enabled: false }} />
      <Outlet />
    </>
  )
}

export default AppLayout
