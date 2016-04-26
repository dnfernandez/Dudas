from google.appengine.ext import ndb


class Pregunta(ndb.Model):
    idPregunta = ndb.IntegerProperty(required=True, indexed=True)
    titulo = ndb.TextProperty(required=True)
    texto = ndb.TextProperty(required=True)
    autor = ndb.StringProperty(required=True)
    fecha = ndb.DateProperty(auto_now_add=True)
