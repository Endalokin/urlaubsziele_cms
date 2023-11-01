import React from 'react'

export default function FactsTable() {
    return (
        <table className="table table-striped table-responsive m-0">
            <tbody>
                <tr>
                    <th scope="row" className="col-4">Sprache</th>
                    <td className="col-8" id="selected_dest_language">Mark</td>
                </tr>
                <tr>
                    <th scope="row" className="col-4">Einwohner</th>
                    <td className="col-8" id="selected_dest_population">Mark</td>
                </tr>
                <tr>
                    <th scope="row" className="col-4">Fläche</th>
                    <td className="col-8" id="selected_dest_area">Mark</td>
                </tr>
            </tbody>
        </table>
    )
}
