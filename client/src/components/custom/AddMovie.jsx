import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useMultipleImageUpload from "@/hooks/useMultipleImageUpload"; // Import the custom hook


const AddMovie = () => {
    const token = localStorage.getItem("token") || null;
    const [formData, setFormData] = useState({
        fullName: "",
        language: "",
        releasedYear: "",
        size: "",
        quality: "",
        genre: [],
        movieType: "",
        format: "",
        subtitles: "N/A",
        storyline: "",
        screenshots: [],
        downloadLinks: [],
    });

    const [selectedFiles, setSelectedFiles] = useState([]);
    const { urls: uploadedUrls, loading: uploading } = useMultipleImageUpload(selectedFiles);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Update screenshots field when images are uploaded
    useEffect(() => {
        if (uploadedUrls.length > 0) {
            setFormData((prev) => ({ ...prev, screenshots: uploadedUrls }));
        }
    }, [uploadedUrls]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file selection for screenshots
    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token) return toast.error("Please login");
        setIsLoading(true);

        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/movies`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                toast.success(data.message);
                navigate("/admin/movies");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while adding the movie.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="p-5 flex items-center my-12 justify-center">
            <Card className="md:w-3/4 w-full bg-[#494949] text-white">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Add a Movie</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="fullName">Movie Name</Label>
                            <Input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="language">Language</Label>
                            <Input
                                type="text"
                                id="language"
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="releasedYear">Released Year</Label>
                            <Input
                                type="number"
                                id="releasedYear"
                                name="releasedYear"
                                value={formData.releasedYear}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="size">Size (e.g., 1.5GB)</Label>
                            <Input
                                type="text"
                                id="size"
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="quality">Quality (e.g., 1080p, 4K)</Label>
                            <Input
                                type="text"
                                id="quality"
                                name="quality"
                                value={formData.quality}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="genre">Genre (comma separated)</Label>
                            <Input
                                type="text"
                                id="genre"
                                name="genre"
                                value={formData.genre.join(", ")} 
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        genre: e.target.value.split(",").map((item) => item.trim()), // Trim spaces
                                    })
                                }
                                required
                                placeholder="e.g., Action, Drama"
                            />

                        </div>

                        <div>
                            <Label htmlFor="movieType">Movie Type</Label>
                            <Input
                                type="text"
                                id="movieType"
                                name="movieType"
                                value={formData.movieType}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Hollywood"
                            />
                        </div>

                        <div>
                            <Label htmlFor="format">Format (e.g., MP4, MKV)</Label>
                            <Input
                                type="text"
                                id="format"
                                name="format"
                                value={formData.format}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="storyline">Storyline</Label>
                            <Textarea
                                id="storyline"
                                name="storyline"
                                value={formData.storyline}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="screenshots">Upload Screenshots</Label>
                            <Input
                                type="file"
                                id="screenshots"
                                multiple
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                            {uploading && <p>Uploading screenshots...</p>}
                        </div>

                        <div>
                            <Label htmlFor="downloadLinks">Download Links (comma separated)</Label>
                            <Input
                                type="text"
                                id="downloadLinks"
                                name="downloadLinks"
                                value={formData.downloadLinks}
                                onChange={(e) =>
                                    setFormData({ ...formData, downloadLinks: e.target.value.split(",") })
                                }
                                placeholder="e.g., https://example.com/file1, https://example.com/file2"
                            />
                        </div>

                        <Button type="submit" disabled={isLoading || uploading}>
                            {isLoading ? "Adding..." : "Add Movie"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default AddMovie;
