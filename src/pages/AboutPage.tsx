import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nostrum consectetur sapiente aspernatur ea repudiandae magni officia, repellendus officiis doloribus accusantium laborum earum impedit deleniti odio ipsa, iste dignissimos omnis!</p>
            <button className="btn indigo"
            onClick={() => history.push('/')}
            >Обратно к списку дел</button>
        </>
    )
}