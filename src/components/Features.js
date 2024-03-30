import React from 'react'

export const Features = () => {
  const features = [
    { "name": "ABS (Anti Block Breaks)", "available": true },
    { "name": "ESP (Electronic Stability Program)", "available": true },
    { "name": "AEB (Abvanced Emergency Braking)", "available": true },
    { "name": "BSD (Blind Spot Detection)", "available": true },
    { "name": "ISA (Intelligent Speed Assitant)", "available": false },
    { "name": "LKA (Lane Keep Assist)", "available": false },
    { "name": "Air bags", "available": true },
    { "name": "Isofix", "available": false },
    { "name": "Safety Glass", "available": true },
    { "name": "Occupant Protection", "available": false },
    { "name": "Rear Window Defogger", "available": false },
    { "name": "Folding Rearview Mirror", "available": true }
  ]

  return (
    <div>
      <h4>Features</h4>
      <table className='features-table'>
        <tbody>
          {
            features.map((feature, index) => {
              return (
                <tr key={index}>
                  <td className={'check ' + (feature.available ? 'available' : 'unavailable')}></td>
                  <td>{feature.name}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <br />
      <img src='https://lh4.googleusercontent.com/proxy/jZV3A9wV5U_rn-eMOcRal-39NmTHf71wnwBhtO8FVbzhvM9SXdFtPu07Gup1pBO6Ik9Pp15aAkL8NihVT2wvk_ejuGH1MbW80hakP2GdvHm21w26owRLHY28QRQSOkJKYJLKR1yI5m3jQT3nUA' style={{ borderRadius: 15, width: 200, marginTop: 50 }} />
    </div>
  )
}
