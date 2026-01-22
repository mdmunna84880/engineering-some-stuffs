public class FriendsPairingProblem {

    public static int countPairingWays(int totalFriends) {
        // SAFETY CHECK: Handle 0 or negative numbers
        if (totalFriends <= 0) {
            return 0; 
        }

        // BASE CASES: 
        // 1 friend = 1 way (stays single)
        // 2 friends = 2 ways (two singles OR one pair)
        if (totalFriends == 1 || totalFriends == 2) {
            return totalFriends;
        }

        // --- SCENARIO 1: Current person stays SINGLE ---
        // If I stay single, we just calculate ways for the remaining (n-1) friends
        int waysIfSingle = countPairingWays(totalFriends - 1);

        // --- SCENARIO 2: Current person PAIRS UP ---
        
        // Step A: Choose a partner (I can pick anyone except myself)
        int choicesForPartner = totalFriends - 1;

        // Step B: Once the pair is formed, calculate ways for the remaining (n-2) friends
        int waysForRemainingGroup = countPairingWays(totalFriends - 2);

        // Combine Step A and B (Multiplication Rule: Choices * Consequences)
        int waysIfPaired = choicesForPartner * waysForRemainingGroup;

        // --- TOTAL ---
        // Add the two distinct realities together (Addition Rule)
        return waysIfSingle + waysIfPaired;
    }

    public static void main(String[] args) {
        int n = 3;
        System.out.println("Total ways to pair " + n + " friends: " + countPairingWays(n));
    }
}