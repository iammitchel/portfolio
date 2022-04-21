import React from 'react'
import './Education.css'

const Education = () => {
  return <table className="table">
      <thead>
          <tr>
              <th>Institute</th>
              <th>Certificate</th>
              <th>Year</th>
          </tr>
      </thead>

      <tbody>
          <tr>
              <td>Great Kings Academy, Egbeda Lagos State.</td>
              <td>SSCE</td>
              <td>2016-2019</td>
          </tr>

          <tr>
              <td>Holy Ghost Juniorate Minor Seminary, Ihiala Anambra State.</td>
              <td>BECE</td>
              <td>2013-2016</td>
          </tr>

          <tr>
              <td>Green Hills Academy, Baruwa Ipaja Lagos State</td>
              <td>SSCE</td>
              <td>2016-2019</td>
          </tr>
      </tbody>
  </table>
}

export default Education