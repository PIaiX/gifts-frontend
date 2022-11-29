import {useMatches} from 'react-router-dom'

const Breadcrumbs = () => {
    let matches = useMatches()
    let crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => match.handle.crumb(match.data))

    return (
        <nav className="breadcrumbs">
            <ul>
                {crumbs.map((crumb, index) => (
                    <li key={index}>{crumb}</li>
                ))}
            </ul>
        </nav>
    )
}

export default Breadcrumbs
