import { Intro } from "../components/partials/Intro"

export const Home = () => {
    return (
        <main>
            <div className="w-full bg-intro-pattern bg-cover">
                <Intro />
            </div>
        </main>
    )
}