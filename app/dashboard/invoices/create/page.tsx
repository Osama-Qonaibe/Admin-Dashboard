import Breadcrumbs from '@/components/shared/invoices/breadcrumbs'
import Form from '@/components/shared/invoices/create-form'
import { fetchCustomers } from '@/lib/actions/customer.actions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Invoice',
}

// Force dynamic rendering to prevent build-time database errors
export const dynamic = 'force-dynamic'

export default async function Page() {
  const customers = await fetchCustomers()

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  )
}
