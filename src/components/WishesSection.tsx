import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "@/contexts/TranslationContext";
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase.js"; // đường dẫn tới file firebase.js


interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

interface FormspreeWish {
  name: string;
  message: string;
  timestamp: string;
  type: string;
}

export const WishesSection = () => {
  const { t } = useTranslation();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [newWish, setNewWish] = useState({
    name: '',
    message: ''
  });


  const fetchWishes = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "wishes"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);

      const wishesData: Wish[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || '',
          message: data.message || '',
          timestamp: data.timestamp?.toDate() || new Date()
        };
      });

      setWishes(wishesData);
    } catch (error) {
      console.error(error);
      toast.error(t('failedToLoad'));
    } finally {
      setLoading(false);
    }
  };



  // Load wishes on component mount
  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmitWish = async (e) => {
    e.preventDefault();

    if (!newWish.name.trim() || !newWish.message.trim()) {
      toast.error(t('pleaseFillBoth'));
      return;
    }

    const loadingToast = toast.loading(t('submittingWish'));

    try {
      await addDoc(collection(db, "wishes"), {
        name: newWish.name.trim(),
        message: newWish.message.trim(),
        timestamp: serverTimestamp()
      });

      toast.dismiss(loadingToast);
      toast.success(t('wishSubmitted'));
      setNewWish({ name: '', message: '' });

      fetchWishes(); // reload danh sách
    } catch (error) {
      console.error(error);
      toast.dismiss(loadingToast);
      toast.error(t('failedToSubmit'));
    }
  };


  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="wishes" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 leading-tight py-2 min-h-[3rem] md:min-h-[4rem]">
            {t('wishesTitle')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('wishesSubtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Wish Form */}
          <Card className="shadow-elegant border-romantic/20 mb-12">
            <CardHeader>
              <CardTitle className="text-center text-romantic flex items-center justify-center gap-2">
                <MessageCircle className="h-6 w-6" />
                {t('shareWish')}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmitWish} className="space-y-4">
                <div>
                  <Input
                    placeholder={t('yourName')}
                    value={newWish.name}
                    onChange={(e) => setNewWish(prev => ({ ...prev, name: e.target.value }))}
                    className="text-base"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder={t('yourWish')}
                    value={newWish.message}
                    onChange={(e) => setNewWish(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="text-base resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-romantic hover:bg-romantic/90 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {t('shareWish')}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Wishes Display */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-romantic text-center mb-8">
              {t('messagesFromLovedOnes')} ({wishes.length})
            </h3>
            
            {wishes.map((wish) => (
              <Card key={wish.id} className="shadow-elegant border-romantic/20 hover:shadow-romantic transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-romantic/10 rounded-full">
                      <Heart className="h-5 w-5 text-romantic" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-romantic">
                          {wish.name}
                        </h4>
                        <span className="text-sm text-muted-foreground">
                          {formatDate(wish.timestamp)}
                        </span>
                      </div>
                      
                      <p className="text-foreground leading-relaxed">
                        {wish.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {loading && (
              <Card className="shadow-elegant border-romantic/20">
                <CardContent className="p-12 text-center">
                  <div className="h-12 w-12 text-romantic/50 mx-auto mb-4 animate-spin rounded-full border-4 border-romantic/20 border-t-romantic"></div>
                  <p className="text-muted-foreground">
                    {t('loadingMessages')}
                  </p>
                </CardContent>
              </Card>
            )}
            
            {!loading && wishes.length === 0 && (
              <Card className="shadow-elegant border-romantic/20">
                <CardContent className="p-12 text-center">
                  <Heart className="h-12 w-12 text-romantic/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {t('beFirstToShare')}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('messageWillAppear')}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};