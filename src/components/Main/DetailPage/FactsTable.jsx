import React from 'react'

export default function FactsTable({languages,residents,area}) {

    




    return (
        <table className="table table-striped table-responsive m-0">
            <tbody>
                <tr>
                    <th scope="row" className="col-4">Sprache</th>
                    <td className="col-8" id="selected_dest_language">tmp</td>
                </tr>
                <tr>
                    <th scope="row" className="col-4">Einwohner</th>
                    <td className="col-8" id="selected_dest_population">{residents}</td>
                </tr>
                <tr>
                    <th scope="row" className="col-4">Fläche</th>
                    <td className="col-8" id="selected_dest_area">{area}</td>
                </tr>
            </tbody>
        </table>
    )
}
