import axios from "axios";
import { useEffect, useState } from "react";

import {
    ToastContainer,
    toast
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Home() {

    const [recipes, setRecipes] = useState([]);

    const [search, setSearch] = useState("");

    const [darkMode, setDarkMode] =
        useState(false);

    const [editingId, setEditingId] =
        useState(null);

    const [favorites, setFavorites] =
        useState([]);

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({

            name: "",
            ingredients: "",
            preparationTime: "",
            category: ""
        });

    // =====================================
    // FETCH RECIPES
    // =====================================

    const fetchRecipes = async () => {

        try {

            setLoading(true);

            const res = await axios.get(
                "http://localhost:3007/receipes"
            );

            setRecipes(res.data);

            setLoading(false);

        } catch (err) {

            console.log(err);

            setLoading(false);
        }
    };

    useEffect(() => {

        fetchRecipes();

    }, []);

    // =====================================
    // HANDLE INPUT
    // =====================================

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value
        });
    };

    // =====================================
    // ADD / UPDATE RECIPE
    // =====================================

    const addRecipe = async (e) => {

        e.preventDefault();

        try {

            const token =
                localStorage.getItem("token");

            if (!token) {

                toast.error(
                    "Please Login First"
                );

                return;
            }

            if (editingId) {

                await axios.put(

                    `http://localhost:3007/receipes/${editingId}`,

                    {
                        ...formData,

                        ingredients:
                            formData.ingredients.split(",")
                    },

                    {
                        headers: {

                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                toast.success(
                    "Recipe Updated"
                );

                setEditingId(null);

            } else {

                await axios.post(

                    "http://localhost:3007/receipes",

                    {
                        ...formData,

                        ingredients:
                            formData.ingredients.split(",")
                    },

                    {
                        headers: {

                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                toast.success(
                    "Recipe Added"
                );
            }

            setFormData({

                name: "",
                ingredients: "",
                preparationTime: "",
                category: ""
            });

            fetchRecipes();

        } catch (err) {

            console.log(err);

            toast.error(
                err.response?.data?.message
            );
        }
    };

    // =====================================
    // DELETE RECIPE
    // =====================================

    const deleteRecipe = async (id) => {

        try {

            const token =
                localStorage.getItem("token");

            await axios.delete(

                `http://localhost:3007/receipes/${id}`,

                {
                    headers: {

                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            toast.success(
                "Recipe Deleted"
            );

            fetchRecipes();

        } catch (err) {

            console.log(err);

            toast.error(
                "Delete Failed"
            );
        }
    };

    // =====================================
    // LOGOUT
    // =====================================

    const logout = () => {

        localStorage.removeItem("token");

        toast.success(
            "Logged Out"
        );

        setTimeout(() => {

            window.location.reload();

        }, 1500);
    };

    // =====================================
    // FAVORITES
    // =====================================

    const toggleFavorite = (id) => {

        if (favorites.includes(id)) {

            setFavorites(

                favorites.filter(
                    (fav) => fav !== id
                )
            );

        } else {

            setFavorites([
                ...favorites,
                id
            ]);
        }
    };

    // =====================================
    // SEARCH FILTER
    // =====================================

    const filteredRecipes =
        recipes.filter((recipe) =>

            recipe.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

    const vegRecipes =
        filteredRecipes.filter(
            (recipe) =>
                recipe.category === "Veg"
        );

    const nonVegRecipes =
        filteredRecipes.filter(
            (recipe) =>
                recipe.category === "Non Veg"
        );

    const fastFoodRecipes =
        filteredRecipes.filter(
            (recipe) =>
                recipe.category === "Fast Food"
        );

    return (

        <div

            style={{

                minHeight: "100vh",

                padding: "30px",

                fontFamily: "Arial",

                backgroundColor:
                    darkMode
                        ? "#121212"
                        : "#f4f6f9",

                color:
                    darkMode
                        ? "white"
                        : "black"
            }}
        >

            {/* HERO SECTION */}

            <div

                style={{

                    background:
                        "linear-gradient(to right,#ff9966,#ff5e62)",

                    padding: "40px",

                    borderRadius: "15px",

                    color: "white",

                    marginBottom: "30px",

                    textAlign: "center"
                }}
            >

                <h1>
                    🍴 Recipe App
                </h1>

                <p>
                    Discover Delicious Recipes
                </p>

            </div>

            {/* HEADER */}

            <div

                style={{

                    display: "flex",

                    justifyContent:
                        "space-between",

                    marginBottom: "20px"
                }}
            >

                <button

                    onClick={() =>
                        setDarkMode(!darkMode)
                    }

                    style={buttonStyle}
                >

                    {
                        darkMode
                            ? "☀️ Light"
                            : "🌙 Dark"
                    }

                </button>

                <button

                    onClick={logout}

                    style={{
                        ...buttonStyle,

                        backgroundColor:
                            "crimson"
                    }}
                >

                    Logout

                </button>

            </div>

            {/* SEARCH */}

            <input

                type="text"

                placeholder="Search Recipes..."

                value={search}

                onChange={(e) =>
                    setSearch(e.target.value)
                }

                style={inputStyle}
            />

            {/* FORM */}

            <div

                style={{

                    backgroundColor:
                        darkMode
                            ? "#1e1e1e"
                            : "white",

                    padding: "25px",

                    borderRadius: "12px",

                    marginBottom: "30px"
                }}
            >

                <h2>

                    {
                        editingId
                            ? "Update Recipe"
                            : "Add Recipe"
                    }

                </h2>

                <form onSubmit={addRecipe}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Recipe Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <input
                        type="text"
                        name="ingredients"
                        placeholder="Ingredients comma separated"
                        value={formData.ingredients}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <input
                        type="number"
                        name="preparationTime"
                        placeholder="Preparation Time"
                        value={formData.preparationTime}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        style={inputStyle}
                    >

                        <option value="">
                            Select Category
                        </option>

                        <option value="Veg">
                            Veg
                        </option>

                        <option value="Non Veg">
                            Non Veg
                        </option>

                        <option value="Fast Food">
                            Fast Food
                        </option>

                    </select>

                    <button
                        type="submit"
                        style={buttonStyle}
                    >

                        {
                            editingId
                                ? "Update Recipe"
                                : "Add Recipe"
                        }

                    </button>

                </form>

            </div>

            {/* LOADING */}

            {
                loading && (
                    <h2>
                        Loading Recipes...
                    </h2>
                )
            }

            {/* RECIPE SECTIONS */}

            <RecipeSection
                title="🥗 Veg Recipes"
                recipes={vegRecipes}
                deleteRecipe={deleteRecipe}
                setFormData={setFormData}
                setEditingId={setEditingId}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
                darkMode={darkMode}
            />

            <RecipeSection
                title="🍗 Non Veg Recipes"
                recipes={nonVegRecipes}
                deleteRecipe={deleteRecipe}
                setFormData={setFormData}
                setEditingId={setEditingId}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
                darkMode={darkMode}
            />

            <RecipeSection
                title="🍔 Fast Food Recipes"
                recipes={fastFoodRecipes}
                deleteRecipe={deleteRecipe}
                setFormData={setFormData}
                setEditingId={setEditingId}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
                darkMode={darkMode}
            />

            <ToastContainer />

        </div>
    );
}

// =====================================
// RECIPE SECTION
// =====================================

function RecipeSection({

    title,
    recipes,
    deleteRecipe,
    setFormData,
    setEditingId,
    toggleFavorite,
    favorites,
    darkMode

}) {

    return (

        <div
            style={{
                marginBottom: "40px"
            }}
        >

            <h2>
                {title}
            </h2>

            <div

                style={{

                    display: "grid",

                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(300px,1fr))",

                    gap: "20px"
                }}
            >

                {

                    recipes.map((recipe) => (

                        <RecipeCard

                            key={recipe._id}

                            recipe={recipe}

                            deleteRecipe={deleteRecipe}

                            setFormData={setFormData}

                            setEditingId={setEditingId}

                            toggleFavorite={toggleFavorite}

                            favorites={favorites}

                            darkMode={darkMode}
                        />
                    ))
                }

            </div>

        </div>
    );
}

// =====================================
// RECIPE CARD
// =====================================

function RecipeCard({

    recipe,
    deleteRecipe,
    setFormData,
    setEditingId,
    toggleFavorite,
    favorites,
    darkMode

}) {

    return (

        <div

            style={{

                backgroundColor:
                    darkMode
                        ? "#1e1e1e"
                        : "white",

                padding: "20px",

                borderRadius: "12px",

                boxShadow:
                    "0px 0px 10px rgba(0,0,0,0.1)",

                transition: "0.3s"
            }}

            onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                    "scale(1.03)";
            }}

            onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                    "scale(1)";
            }}
        >

            <div

                style={{

                    display: "flex",

                    justifyContent:
                        "space-between"
                }}
            >

                <h2>
                    {recipe.name}
                </h2>

                <button

                    onClick={() =>
                        toggleFavorite(recipe._id)
                    }

                    style={{

                        border: "none",

                        background: "none",

                        fontSize: "25px",

                        cursor: "pointer"
                    }}
                >

                    {
                        favorites.includes(
                            recipe._id
                        )
                            ? "❤️"
                            : "🤍"
                    }

                </button>

            </div>

            <p>
                <b>Ingredients:</b>{" "}
                {recipe.ingredients.join(", ")}
            </p>

            <p>
                <b>Preparation Time:</b>{" "}
                {recipe.preparationTime} mins
            </p>

            <p>
                <b>Category:</b>{" "}
                {recipe.category}
            </p>

            <p>
                <b>Added By:</b>{" "}
                {recipe.userPrepared?.name}
            </p>

            <button

                onClick={() => {

                    setFormData({

                        name: recipe.name,

                        ingredients:
                            recipe.ingredients.join(","),

                        preparationTime:
                            recipe.preparationTime,

                        category:
                            recipe.category
                    });

                    setEditingId(recipe._id);
                }}

                style={{
                    ...buttonStyle,
                    marginTop: "10px"
                }}
            >

                Edit

            </button>

            <button

                onClick={() =>
                    deleteRecipe(recipe._id)
                }

                style={{
                    ...buttonStyle,

                    backgroundColor:
                        "crimson",

                    marginTop: "10px"
                }}
            >

                Delete

            </button>

        </div>
    );
}

// =====================================
// COMMON STYLES
// =====================================

const inputStyle = {

    width: "100%",

    padding: "12px",

    marginBottom: "15px",

    borderRadius: "8px",

    border: "1px solid #ccc",

    fontSize: "15px",

    boxSizing: "border-box"
};

const buttonStyle = {

    padding: "12px",

    width: "100%",

    border: "none",

    borderRadius: "8px",

    backgroundColor: "#007bff",

    color: "white",

    fontSize: "15px",

    cursor: "pointer"
};

export default Home;