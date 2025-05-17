import React from "react"

const AuthContext = React.createContext({})
function AuthProvider({ user, status, forgotPwLink, children }: any) {
  const memoizedValue = React.useMemo(() => {
    return {
      user,
      status,
      forgotPwLink,
    }
  }, [user, status, forgotPwLink])
  return (
      <AuthContext.Provider value={memoizedValue}>
          {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider