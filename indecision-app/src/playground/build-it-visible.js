let show = false
const details = () => {
    show = !show
    render()
}

const render = () => {
    const app = (
        <div>
            <h1>Visibility Togge</h1>
            <button onClick={details}>
                {show ? 'Hide Details' : 'Show Details'}
            </button>
            {show && <p>Details that not everyone should see...</p>}
        </div>
    )
    ReactDOM.render(app, document.getElementById('app'))
}
render()