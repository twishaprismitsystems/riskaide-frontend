import BreadCrumb from '@/common/BreadCrumb'
import MainLayout from '@/layouts/MainLayout'
import utils from '@/utils/utils'
import React from 'react'
import InsurancePlans from './InsurancePlans/InsurancePlans'

const InsurancePage = () => {
  return (
    <React.Fragment>
      <MainLayout>
        <main>
          <BreadCrumb
            title={utils.getContent("Insurance Plans")}
            desc={utils.getContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
          />
          <InsurancePlans />
        </main>
      </MainLayout>
    </React.Fragment>
  )
}

export default InsurancePage
