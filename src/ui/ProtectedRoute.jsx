import styled from "styled-components"
import { useEffect } from "react"
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner"
import { useNavigate } from "react-router-dom"

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`

function ProtectedRoute({ children }) {
    const navigate = useNavigate()

    //Load the authenticated user
    const { isLoading, user, isAuthenticated } = useUser()

    //Redirect if user is not authenticated
    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            navigate('/login')
        }
    }, [isAuthenticated, isLoading, navigate])

    //Show loading spinner
    if (isLoading) return <FullPage><Spinner /></FullPage>

    if (isAuthenticated) return children
}

export default ProtectedRoute