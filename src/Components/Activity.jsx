import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // To customize marker icons if necessary

// Make sure to import the leaflet CSS to display the map properly
import 'leaflet/dist/leaflet.css';

const Activity = () => {
    const position = [51.505, -0.09]; // Latitude, Longitude (example: London)
    const zoom = 13; // Map zoom level

    return (
        <div className="lg:px-20">
            <div className="max-w-[750px] border-b-2 gap-10 px-[20px] py-10 ">
                <h3 className="font-[700] text-[22px] text-[#1C2B38]">Activity</h3>
                <h4 className=" font-[700] text-[15px] text-[#1C2B38] mt-5">What you will do</h4>
                <ul className=" font-[600] text-[14px] text-[#495560] flex flex-col gap-2 mt-3 list-disc ml-5">
                    <li>Discover London on board a classic Routemaster vintage double decker bus</li>
                    <li>Cruise down the River Thames</li>
                    <li>See the Changing of the Guard</li>
                    <li>Go to Westminster Abbey</li>
                    <li>Listen to the chimes of Big Ben and see the Houses of Parliament</li>
                </ul>

            </div>
            <div className="p-5 border-b-2 lg:">
                <h3 className="font-[700] text-[22px] mt-5 ">What is included / not  included</h3>
                <div className=" flex flex-wrap gap-16 p-3">

                    <div>
                        <h3 className=" font-[700] text-[15px] text-[#1C2B38] mt-3">Includes</h3>
                        <ul className=" font-[600] text-[14px] text-[#495560] flex flex-col gap-2 mt-3 list-disc ml-5">
                            <li>Double-decker Routemaster tour</li>
                            <li>Short trip along the River Thames</li>
                            <li>Changing of the Guard</li>
                            <li>Gratuities</li>

                        </ul>
                    </div>
                    <div>
                        <h3 className=" font-[700] text-[15px] text-[#1C2B38]">Not Includes</h3>
                        <ul className=" font-[600] text-[14px] text-[#495560] flex flex-col gap-2 mt-3 list-disc ml-5">
                            <li>Double-decker Routemaster tour</li>
                            <li>Short trip along the River Thames</li>
                            <li>Changing of the Guard</li>
                            <li>Gratuities</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-5 border-b-2">
                <h4 className=" font-[700] text-[15px] text-[#1C2B38] mt-3">Safety</h4>
                <h3 className=" font-[600] text-[15px] text-[#1C2B38] mt-2">Health precautions</h3>
                <ul className=" font-[600] text-[14px] text-[#495560] flex flex-col gap-2 mt-3 list-disc ml-5">
                    <li>All required protective equipment is provided</li>
                    <li>All areas that customers touch are frequently cleaned</li>
                    <li>You must keep social distance while in vehicles</li>
                    <li>The number of visitors is limited to reduce crowds</li>
                </ul>
            </div>
            <div className="p-5 ">
                <h4 className=" font-[700] text-[15px] text-[#1C2B38] mt-3">Details</h4>
                <div className="flex flex-wrap gap-10">
                    <div>
                        <h4 className=" font-[600] text-[15px] text-[#1C2B38] mt-2">Language</h4>
                        <ul className=" font-[600] text-[14px] text-[#495560] flex flex-col gap-2 mt-3 list-disc ml-5">
                            <li>English</li>
                            <li>French</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className=" font-[600] text-[15px] text-[#1C2B38] mt-2">Duration</h4>
                        <ul className=" font-[600] text-[14px] text-[#495560] flex flex-col gap-2 mt-3 list-disc ml-5">
                            <li>2 Hours</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className=" font-[600] text-[15px] text-[#1C2B38] mt-2">Language</h4>
                        <ul className=" font-[600] text-[14px] text-[#495560] flex flex-col gap-2 mt-3 list-disc ml-5">
                            <li>5 People</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h4 className=" font-[600] text-[15px] text-[#1C2B38] mt-2">Meeting Point Address</h4>
                    <ul className=" font-[600] text-[14px] text-[#495560] flex flex-col gap-2 mt-3 list-disc ml-5">
                        <li>Meet your guide inside the west entrance of Altab Ali Park (Whitechapel Road). It's opposite the entrance to Aldgate East Tube Station and the Whitechapel Gallery. Look for a guide wearing SMT attire and holding a red SMT flag</li>
                    </ul>
                </div>
                60
            </div>
            <div>
            <div style={{ height: "500px" }}>
      <MapContainer center={position} zoom={zoom} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A sample marker in the map!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
            </div>
        </div>
    )
}

export default Activity
