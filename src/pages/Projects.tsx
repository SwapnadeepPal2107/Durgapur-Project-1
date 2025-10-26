import React from 'react';
const projects = [{
  name: 'Forest Department Mapping',
  service: 'RS & GIS Mapping',
  location: 'Muchipara, Durgapur',
  client: 'Forest Divisional Office',
  status: 'Completed'
}, {
  name: 'Joint Survey Project',
  service: 'RS & GIS Mapping',
  location: 'Akandara, Durgapur',
  client: 'Essar Oil & Gas / Forest Dept.',
  status: 'Completed'
}, {
  name: 'Mouza Plot Location',
  service: 'RS & GIS Mapping',
  location: 'Kanksa',
  client: 'BL&LRO Office',
  status: 'Completed'
}, {
  name: 'Land Survey & Mapping',
  service: 'GIS Survey',
  location: 'New Town, Kolkata',
  client: 'Anmol Feeds Pvt. Ltd.',
  status: 'Completed'
}, {
  name: 'Drone Survey',
  service: 'Drone & KML',
  location: 'ECL Bankola Area',
  client: 'Environment Department',
  status: 'Completed'
}, {
  name: 'Satellite Land Survey',
  service: 'GIS Survey',
  location: 'Baskopa, Durgapur',
  client: 'Amit Metaliks Ltd.',
  status: 'Completed'
}, {
  name: 'DGPS Nala Survey',
  service: 'DGPS Survey',
  location: 'Tilabani, Pandabeswar',
  client: 'JMS Tilabani Pvt. Ltd.',
  status: 'Completed'
}, {
  name: 'Index Register Mapping',
  service: 'Field Measurement',
  location: 'Dhabani, Durgapur',
  client: 'Kusam Haranath Paribas',
  status: 'Completed'
}, {
  name: 'GIS Shape Files',
  service: 'GIS Mapping',
  location: 'Manbazar, Purulia',
  client: 'NCC Limited',
  status: 'Completed'
}, {
  name: 'Joint Boundary Demarcation',
  service: 'DGPS, RS & GIS',
  location: 'Ausgram',
  client: 'BL&LRO / Forest / Public',
  status: 'Completed'
}, {
  name: 'Air Force Base Mapping',
  service: 'RS & GIS',
  location: 'Panagarh',
  client: 'Air Force Base Camp',
  status: 'Completed'
}, {
  name: 'Bridge Land Mapping',
  service: 'GIS Land Schedule',
  location: 'SH-14, Panagarh-Illambazar',
  client: 'PWD, Govt. of West Bengal',
  status: 'Completed'
}];
export function Projects() {
  return <div className="pt-[120px]">
      {/* Hero Section */}
      <div className="bg-[#0C2340] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300">
            Trusted by government agencies and leading organizations
          </p>
        </div>
      </div>
      {/* Projects Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0C2340] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Project Name
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Service Type
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#0C2340]">
                        {project.name}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {project.service}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {project.location}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {project.client}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {project.status}
                        </span>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>;
}