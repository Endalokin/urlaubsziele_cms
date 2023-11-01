import React from 'react'

export default function Cards() {
    return (
        <div className="container py-4" id="overview">
            <div className="row row-cols-2 row-cols-md-3 g-3">
                <Card country="Neuseeland" imgURL="https://viel-unterwegs.de/wp-content/uploads/2022/04/neuseeland-sehenswuerdigkeiten.jpg" text="Auf den zwei Inseln im Pazifik erleben Sie eine vielfältige Natur mit Vulkanen und Gletschern." />
                <Card country="Frankreich" imgURL="https://images.ctfassets.net/rc3dlxapnu6k/4qhCSGgWU4l87x1Q8i0vts/b2c0f9361ec4a441e5476d19b3434ea5/iStock-1398324421.jpg?w=2121&h=1193&fl=progressive&q=50&fm=jpg" text="Erleben Sie dieses vielfältige Land an der Mittelmeer- oder Nordseeküste, in der Hauptstadt Paris oder im Landesinnere und lassen es sich bei Wein und Baguette gut gehen." />
                <Card country="Niederlande" imgURL="https://image.geo.de/30833876/t/-o/v3/w1440/r1.5/-/enkhuizen-a--356431172.jpg" text="Fahren Sie mit dem Rad durch Tulpenfelder und an Windmühlen vorbei oder besuchen Sie die tollen Kunstmuseen in der Hauptstadt Amsterdam." />
                <Card country="Schweden" imgURL="" text="Erkunden Sie zahlreiche Inseln und Seen in diesem vom Wechsel aus Wasser und Land bestimmten Teil Skandinaviens." />
                <Card country="Griechenland" imgURL="" text="Wandeln Sie im Land der Antike auf historischen Spuren und genießen Sie die schönen Strände auf den zahllosen Inseln." />
                <Card country="Algerien" imgURL="https://supertest.de/media/b78/ab/constantine-algerien.detail_2x.webp" text="Besuchen Sie die Hauptstadt Algier, die Sahara oder die vielen geschichtsträchtigen Orte in diesem nordafrikanischen Land." />
            </div>
        </div>
    )
}
