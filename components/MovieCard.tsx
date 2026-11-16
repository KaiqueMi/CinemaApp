import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native"
import Rating from "./Rating";

export type MovieCardProps = {
    image: ImageSourcePropType;
    title: string;
    category: string;
    rating: number;
    favorite: boolean;
    onDetails: () => void;
    onFavorite: () => void;
}

export default function MovieCard({
    image, title, category, favorite, rating, onDetails, onFavorite,
}: MovieCardProps) {
    return(
        <View style={styles.card}>
            <Image source={image} style={styles.image}></Image>

            <View style={styles.information}>
                <Text  style={styles.title} numberOfLines={1}>{title}</Text>

                <View style={styles.row}>
                    <View style={styles.categoryBadge}>
                        <Text style={styles.categoryText}>{category}</Text>
                    </View>
                    <Rating value={rating}></Rating>

                </View>

                <View>
                    <Pressable style={styles.detailsButton}>
                        <Text style={styles.detailsText}>Ver detalhes</Text>
                    </Pressable>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#141724",
        borderRadius: 18,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#242b40",
    },

    image: {
        width: "100%",
        height: 195,
        
    },

    information: {
        padding: 16,
    },

    title: {
        fontSize: 18,
        fontWeight: "800",
        color: "#fff",
        marginBottom: 8
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    categoryBadge: {
        backgroundColor: "#1e2437",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: "#2c344e",
        borderRadius: 12
    },

    categoryText: {
        fontSize: 12,
        fontWeight: "700",
         color: "#94a3b8"
    },

    detailsButton: {
        backgroundColor: "#1e2437",
        height: 42,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#2d3650",
        marginTop: 10
    },

    detailsText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#fff"
    }
})