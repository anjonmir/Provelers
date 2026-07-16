import {

    useEffect,

    useState

} from "react";

import { mockPlaces } from "../../../data/mockPlaces";

import {

    useNavigate

} from "react-router-dom";

import {

    HiOutlineSearch

} from "react-icons/hi";

import {

    searchEverything

} from "../../../services/searchService";

import "./SearchBar.css";

function SearchBar() {

    const navigate =
        useNavigate();

    const [query, setQuery] =
        useState("");

    const [result, setResult] =
        useState<any>(null);

    useEffect(() => {

        if (!query.trim()) {

            setResult(null);
            return;

        }

        const controller = new AbortController();

        const timer = setTimeout(async () => {

            try {

                const data = await searchEverything(

                    query,
                    controller.signal

                );
                const regex = new RegExp(query, "i");

                const places = mockPlaces
                    .filter(place =>
                        regex.test(place.name) ||
                        regex.test(place.location)
                    )
                    .slice(0, 6);

                setResult({

                    users: data.users,

                    places,

                });

            } catch (err: any) {

                if (err.name !== "AbortError") {

                    console.error(err);

                }

            }

        }, 300);

        return () => {

            controller.abort();

            clearTimeout(timer);

        };

    }, [query]);

    return (

        <div className="global-search">

            <HiOutlineSearch className="search-icon" />

            <input

                placeholder="Search travelers or places..."

                value={query}

                onChange={(e) =>

                    setQuery(e.target.value)

                }

            />

            {result && (

                <div className="search-dropdown">

                   {result?.users?.length > 0 && (

                        <>

                            <div className="search-title">

                                👤 Travelers

                            </div>

                            {result.users.map((user: any) => (

                                <div

                                    key={user.firebaseUid}

                                    className="search-item"

                                    onClick={() => {

                                        navigate(

                                            `/profile/${user.firebaseUid}`

                                        );

                                        setQuery("");

                                        setResult(null);

                                    }}

                                >

                                    <img

                                        src={user.photoURL}

                                        alt=""

                                    />

                                    <div>

                                        <strong>

                                            {user.fullName}

                                        </strong>

                                        <small>

                                            @{user.username}

                                        </small>

                                    </div>

                                </div>

                            ))}

                        </>

                    )}

                    {result?.places?.length > 0 && (

                        <>

                            <div className="search-title">

                                📍 Places

                            </div>

                            {result.places.map((place: any) => (

                                <div

                                    key={place.id}

                                    className="search-item"

                                    onClick={() => {

                                        navigate(

                                            `/map?place=${encodeURIComponent(place.name)}`

                                        );

                                        setQuery("");

                                        setResult(null);

                                    }}

                                >

                                    <div>

                                        <strong>

                                            {place.name}

                                        </strong>

                                        <small>

                                            {place.location}

                                        </small>

                                    </div>

                                </div>

                            ))}

                        </>

                    )}

                </div>

            )}

        </div>

    );

}

export default SearchBar;