import { AdminPage } from "@/components/pages/admin-page"
import { AuthProvider } from "@/contexts/auth-context"
import { ProtectedAdmin } from "@/components/admin/protected-admin"

export default function Admin() {
  return (
    <AuthProvider>
      <ProtectedAdmin>
        <AdminPage />
      </ProtectedAdmin>
    </AuthProvider>
  )
}
