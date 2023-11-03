import React from 'react'

export default function SearchBar() {
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Urlaubsziel suchen" aria-label="search" id="datatable-search-input" />
            <button className="btn btn-outline-success fw-medium" type="submit">Suchen</button>
        </form>
    )
}
