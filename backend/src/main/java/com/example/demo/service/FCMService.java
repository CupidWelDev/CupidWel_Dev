

// public class FCMService {
//     private String getAccessToken() throws IOException {
//         String firebaseConfigPath = "firebase/cocotalk_firebase_service_key.json";
//         GoogleCredentials googleCredentials = GoogleCredentials
//                 .fromStream(new ClassPathResource(firebaseConfigPath).getInputStream())
//                 .createScoped(List.of("https://www.googleapis.com/auth/cloud-platform"));
//         googleCredentials.refreshIfExpired();
//         return googleCredentials.getAccessToken().getTokenValue();
//     }
// }